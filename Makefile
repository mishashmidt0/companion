build:
	docker build -t ai-companion .

run:
	docker run -d -p 3000:3000 -v logs:/app/data --env-file .env --name companion ai-companion

run-dev:
	docker run -d -p 3000:3000 -v "D/dev/projects/ai-companion:/app" -v /app/node_modules -v logs:/app/data --env-file .env --name companion ai-companion

stop:
	docker stop companion

delete container:
	docker rm companion

delete images:
	docker rmi ai-companion
