help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

run: install ## Starts the development server
	@yarn install
	@yarn start

build: ## Build the App
	@yarn build

install:
	@yarn install

lib: ## Links the lib locally
	@yarn lib:link
