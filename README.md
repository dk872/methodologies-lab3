# Docker in Practice

## Description
In this project, I explored practical methods for packaging applications into Docker images. The main focus was on measuring and comparing image size and build time depending on how the Dockerfile is written, the choice of base image, and the structure of the project.

## How to run
First, clone the repository and navigate into the project directory:
```
git clone https://github.com/dk872/methodologies-lab3
```
```
cd methodologies-lab3
```

### Python
Go to the directory containing the Python application:
```
cd Python
```
Start the image build:
```
docker build -t spaceship-app .
```
Run a container with an application:
```
docker run -p 8080:8080 spaceship-app
```
You can check the application's operation by going to:
```
http://localhost:8080
```
To get the result of matrix multiplication, go to:
```
http://localhost:8080/api/matrix
```

### Go
Go to the directory containing the Go application:
```
cd Go
```
Start the image build:
```
docker build -t fizzbuzz .
```
Run a container with an application:
```
docker run -p 8080:8080 fizzbuzz
```
You can check the application's operation by going to:
```
http://localhost:8080
```

### JavaScript
Go to the directory containing the JavaScript application:
```
cd JavaScript
```

- **Without using Docker Compose:**
  - Create and run a container for MongoDB:
    ```
    docker run --name mongodb -d -p 27017:27017 mongo
    ```
  - Start the image build:
    ```
    docker build -t users-cli .
    ```
  - Run a container with an application:
    ```
    docker run -it --rm --network=host users-cli
    ```

- **Using Docker Compose:**
  - Run the build:
    ```
    docker-compose up --build
    ```
  - Run a container with an application:
    ```
    docker exec -it users-cli node app.js
    ```

## Author info
Dmytro Kulyk, a student of group IM-32
