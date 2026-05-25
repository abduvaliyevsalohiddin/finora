import requests

from django.shortcuts import render, redirect
from django.contrib import messages


def index_view(request):

    if request.method == 'POST':

        name = request.POST.get('name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        service = request.POST.get('service')
        message = request.POST.get('message')

        # TELEGRAM BOT TOKEN
        BOT_TOKEN = "8917001498:AAEaPjvJac6DirI8Sd6VbaYnbQDgNVShWHM"

        # CHAT ID
        CHAT_ID = "7828725013"

        telegram_text = f"""
🔔 <b>YANGI ARIZA!</b>

👤 <b>Ism:</b> {name}

📞 <b>Telefon:</b> {phone}

📧 <b>Email:</b> {email}

🛠 <b>Xizmat:</b> {service}

✉️ <b>Xabar:</b>
{message}
"""

        url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

        payload = {
            'chat_id': CHAT_ID,
            'text': telegram_text,
            'parse_mode': 'HTML'
        }

        try:

            response = requests.post(url, data=payload)

            print(response.text)

            if response.status_code == 200:

                messages.success(
                    request,
                    "Xabaringiz muvaffaqiyatli yuborildi!"
                )

            else:

                messages.error(
                    request,
                    "Telegramga yuborishda xatolik!"
                )

        except Exception as e:

            print(e)

            messages.error(
                request,
                "Server xatoligi yuz berdi!"
            )

        return redirect('home')

    return render(request, 'index.html')