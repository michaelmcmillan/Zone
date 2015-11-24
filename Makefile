ELECTRON_VERSION="0.35.1"
APP_TITLE="Zone"
APP_ICON_OSX="$(SRC_DIR)/assets/icons/OS X.icns"

DEPENDENCY_BIN_DIR="./src/node_modules/.bin"
TEST_DIR="./test"
SRC_DIR="./src"
BUILD_DIR="./bin"

BUILD_OSX_DIR=$(BUILD_DIR)/osx
BUILD_WIN_DIR=$(BUILD_DIR)/win

MOCHA=$(DEPENDENCY_BIN_DIR)/mocha
ELECTRON=$(DEPENDENCY_BIN_DIR)/electron
PACKAGER=$(DEPENDENCY_BIN_DIR)/electron-packager
REDUNDANT="node_modules/electron*"

run:
	@$(ELECTRON) $(SRC_DIR)

install:
	@npm install --prefix $(SRC_DIR) 

clean:
	@rm -rf $(BUILD_OSX_DIR) $(BUILD_WIN_DIR)

build: clean build-osx-x64

build-osx-x64:
	@$(PACKAGER) $(SRC_DIR) $(APP_TITLE) --asar --platform=darwin --arch=x64 \
		--icon=$(APP_ICON_OSX) --version=$(ELECTRON_VERSION) --out $(BUILD_OSX_DIR) --ignore=$(REDUNDANT)

build-win32-x64:
	@$(PACKAGER) $(SRC_DIR) $(APP_TITLE) --asar --platform=win32 --arch=x64 \
		--version=$(ELECTRON_VERSION) --out $(BUILD_WIN_DIR) --ignore=$(REDUNDANT)

test:
	@$(MOCHA) $(TEST_DIR)

.PHONY: install test
