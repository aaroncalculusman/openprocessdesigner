# Settings
ifdef DEBUG
MCS = mcs
MCSFLAGS = -debug
OUTPUT_DIR = bin/Debug
else
MCS = mcs
MCSFLAGS = 
OUTPUT_DIR = bin/Release
endif

.PHONY: all debug HelloWorld clean

all: HelloWorld

debug:
	$(MAKE) DEBUG=1

# Create the output directory
$(OUTPUT_DIR):
	mkdir -p $(OUTPUT_DIR)

##################
### HelloWorld ###
##################
HelloWorld: SRC = src/HelloWorld.cs
HelloWorld: RES =
HelloWorld: LIB =
HelloWorld: $(OUTPUT_DIR)/HelloWorld.exe

$(OUTPUT_DIR)/HelloWorld.exe: $(OUTPUT_DIR) $(SRC) $(RES) $(LIB)
	echo OUTPUT_DIR = $(OUTPUT_DIR)
	$(MCS) $(MCSFLAGS) -target:exe -out:$@ \
	$(foreach res,$(RES), \
	$(addprefix -resource:,$(res))) \
	$(foreach dl,$(LIB),$(addprefix -r:,$(dl))) \
	$(SRC)


clean:
	rm -rf bin
