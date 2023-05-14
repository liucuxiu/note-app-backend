#!/bin/sh
moduleName='note'
moduleNameUppercase='Note'

cd src/modules
cd "${moduleName}s"

mkdir domain
cd domain
	touch  "${moduleNameUppercase}.ts"
cd ..


mkdir dtos
cd dtos
	touch "${moduleNameUppercase}DTO.ts"
cd ..

mkdir infra
cd infra
	mkdir http
	cd http
		mkdir routes
		cd routes
		touch index.ts
		cd ..

		mkdir schemas
	cd ..
cd ..

mkdir mappers
cd mappers 
touch "${moduleName}Mapper.ts"
cd ..


mkdir repos
cd repos
	mkdir implementations
	cd implementations
	touch "mongo${moduleNameUppercase}Repo.ts"
	cd ..

	touch "${moduleName}Repo.ts"
	touch index.ts

cd ..

mkdir services


mkdir useCases
cd useCases
	mkdir "create${moduleNameUppercase}"
	cd "create${moduleNameUppercase}"
		touch "Create${moduleNameUppercase}Controller.ts"
		touch "Create${moduleNameUppercase}DTO.ts"
		touch "Create${moduleNameUppercase}UseCase.ts"
		touch index.ts
	cd ..

	mkdir "get${moduleNameUppercase}"
	cd "get${moduleNameUppercase}"
		touch "Get${moduleNameUppercase}Controller.ts"
		touch "Get${moduleNameUppercase}DTO.ts"
		touch "Get${moduleNameUppercase}.ts"
		touch index.ts
	cd ..	

	mkdir "get${moduleNameUppercase}ById"
	cd "get${moduleNameUppercase}ById"
		touch "Get${moduleNameUppercase}ByIdController.ts"
		touch "Get${moduleNameUppercase}ById.ts"
		touch index.ts
	cd ..	

	mkdir "delete${moduleNameUppercase}"
	cd "delete${moduleNameUppercase}"
		touch "Delete${moduleNameUppercase}Controller.ts"
		touch "Delete${moduleNameUppercase}DTO.ts"
		touch "Delete${moduleNameUppercase}UseCase.ts"
		touch index.ts
	cd ..	

	mkdir "edit${moduleNameUppercase}"
	cd "edit${moduleNameUppercase}"
		touch "Edit${moduleNameUppercase}Controller.ts"
		touch "Edit${moduleNameUppercase}DTO.ts"
		touch "Edit${moduleNameUppercase}UseCase.ts"
		touch index.ts
	cd ..	

cd ..









