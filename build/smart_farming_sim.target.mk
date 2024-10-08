# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := smart_farming_sim
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=smart_farming_sim' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=10.15 \
	-arch \
	arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++17 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/include/node \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/src \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/openssl/config \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/openssl/openssl/include \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/uv/include \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/zlib \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/v8/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=smart_farming_sim' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-O3 \
	-gdwarf-2 \
	-mmacosx-version-min=10.15 \
	-arch \
	arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++17 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/include/node \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/src \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/openssl/config \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/openssl/openssl/include \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/uv/include \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/zlib \
	-I/Users/prince/Library/Caches/node-gyp/20.11.0/deps/v8/include

OBJS :=

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)


### Rules for final target.
LDFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.15 \
	-arch \
	arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.15 \
	-arch \
	arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first

LIBS :=

$(builddir)/smart_farming_sim.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/smart_farming_sim.node: LIBS := $(LIBS)
$(builddir)/smart_farming_sim.node: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/smart_farming_sim.node: TOOLSET := $(TOOLSET)
$(builddir)/smart_farming_sim.node:  FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(builddir)/smart_farming_sim.node
# Add target alias
.PHONY: smart_farming_sim
smart_farming_sim: $(builddir)/smart_farming_sim.node

# Short alias for building this executable.
.PHONY: smart_farming_sim.node
smart_farming_sim.node: $(builddir)/smart_farming_sim.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/smart_farming_sim.node

