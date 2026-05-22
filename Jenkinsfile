pipeline {
    agent any

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
                sh 'docker build -t cloudbridge-ecommerce -f docker/Dockerfile .'
            }
        }

    }
}
