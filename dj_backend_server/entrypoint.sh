#!/bin/bash

# Define the file path as a variable
CHAT_JS_FILE="/app/web/static/chat.js"
SEARCH_JS_FILE="/app/web/static/search.js"

# Actual replacement
sed -i "s|http://0.0.0.0:8000|${APP_URL}|g" $CHAT_JS_FILE
sed -i "s|http://0.0.0.0:8000|${APP_URL}|g" $SEARCH_JS_FILE

#Bot is Thinking
sed -i "s|Bot is Thinking...|${LNG_BOT}|g" $CHAT_JS_FILE
sed -i "s|error sending the message.|${LNG_ERROR}|g" $CHAT_JS_FILE
sed -i "s|Ask a question...|${LNG_ASK}|g" $CHAT_JS_FILE
sed -i "s|Write a reply...|${LNG_WRITE}|g" $CHAT_JS_FILE

# Check if the pattern with APP_URL already exists
if grep -q '("${APP_URL}/api/chat/init")' $CHAT_JS_FILE; then
  echo "Pattern with APP_URL already exists, doing nothing."

# Check if the pattern with the default URL exists
elif grep -q '("http://0.0.0.0:8000/api/chat/init")' "$CHAT_JS_FILE"; then
  echo "Replacing default URL with APP_URL."
  sed -i "s|http://0.0.0.0:8000|${APP_URL}|g" "$CHAT_JS_FILE"

# Check if the pattern n.get("api/chat/init") exists
elif grep -q 'n.get("/api/chat/init")' "$CHAT_JS_FILE"; then
  echo "Appending APP_URL to /chat/init."
  sed -i "s|n.get(\"/api/chat/init\")|n.get(\"${APP_URL}/api/chat/init\")|g" "$CHAT_JS_FILE"

# Check if the pattern n.get("api/chat/init") exists
elif grep -q 'n.get("/chat/init")' "$CHAT_JS_FILE"; then
  echo "Appending APP_URL to /chat/init."
  sed -i "s|n.get(\"/chat/init\")|n.get(\"${APP_URL}/api/chat/init\")|g" "$CHAT_JS_FILE"
fi

# Wait for database to be ready (simplified for Render PostgreSQL)
echo "Checking database connection..."
python -c "
import django
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dj_backend_server.settings')
django.setup()
from django.db import connections
from django.core.management.color import no_style
from django.db.utils import ConnectionHandler

try:
    db_conn = connections['default']
    db_conn.cursor()
    print('Database connection successful!')
except Exception as e:
    print(f'Database connection failed: {e}')
    exit(1)
"

# Run migrations
echo "Running database migrations..."
python manage.py makemigrations
python manage.py migrate

# Sync models (if this is a custom command)
echo "Syncing models..."
python manage.py sync_models || echo "sync_models command not found, skipping..."

# Start Django server on the port specified by Render (or default to 8000)
PORT=${PORT:-8000}
echo "Starting Django server on 0.0.0.0:$PORT"
python manage.py runserver 0.0.0.0:$PORT