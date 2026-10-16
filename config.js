"""
Configuration — fill in before running.
"""

# Telegram bot token from @BotFather
BOT_TOKEN = "8719485295:AAFXa7DPUibi0M0IGtgL4y3TnfBPkdEjZbs"

# Telegram user IDs allowed to use the bot (integers).
# Only you can use it.
ALLOWED_USERS: list[int] = [8945357335]

# Where to save exported session files
COOKIES_DIR = "cookies"

# MAX web login URL
MAX_WEB_URL = "https://web.max.ru"

# Playwright
HEADLESS = True           # False to watch the browser
BROWSER_TIMEOUT = 60_000  # ms
