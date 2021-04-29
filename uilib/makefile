.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Build all services
	echo "build"
    
run: ## Start Storybook
	yarn sb 

dev: ## Start project in TDD mode
	echo "dev"

test: ## Run Tests
	echo "test"
	