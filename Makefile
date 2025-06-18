.PHONY: build-init
build-init:
	@echo "Building init..."
	skaffold dev
	@echo "Init build complete."
