# Use the backend-server Dockerfile as base
FROM python:3.9-slim

WORKDIR /app

# Copy backend-server files
COPY dj_backend_server/ .

# Install dependencies
RUN pip install -r requirements.txt

# Install PostgreSQL adapter
RUN pip install psycopg2-binary

# Expose port
EXPOSE 8000

# Start command
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]