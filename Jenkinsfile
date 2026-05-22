kpipeline {
    agent any

    environment {
        DOCKER_IMAGE = "zoya9545/cloudbridge-ecommerce:v1"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                credentialsId: 'github-creds',
                url: 'https://github.com/zoya9545-web/cloudbridge-ecommerce-platform.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE -f docker/Dockerfile .'
            }
        }

        stage('Push Docker Image') {
            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'docker-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'

                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

    }
}
