pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main', url: 'https://github.com/Aryanraj2400/Aryan_Portfolio'
            }
        }

        stage('List Files') {
            steps {
                echo 'Listing project files...'
                sh 'ls -la'
            }
        }

        stage('Static Check') {
            steps {
                echo 'Performing basic validation...'
                // Add any static validation tools here
                // For now, just a placeholder
                sh 'echo "No validation steps configured yet."'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
