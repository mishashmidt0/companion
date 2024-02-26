build:
	docker build -t ai-companion .

run:
	docker run -d -p 3000:3000  --env-file .env --name companion ai-companion

stop:
	docker stop companion

delete container:
	docker rm companion

delete images:
	docker rmi ai-companion
