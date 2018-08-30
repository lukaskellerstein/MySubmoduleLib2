
all: clean build run

clean:
	rm -rf ./form-generator-app/node_modules; \
	rm -rf ./form-generator-app/dist; \
	rm -rf ./projects/form-generator/node_modules; \
	cd ./form-generator-app; \
	rm -rf ./yarn.lock; \
	cd ./projects/form-generator; \
	rm -rf ./yarn.lock

build:
	cd ./form-generator-app; \
	yarn; \
	yarn build:library

run: 
	cd ./form-generator-app; \
	yarn start; 