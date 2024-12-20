from dotenv import load_dotenv
from app.maritalk_service import MariTalkService
import os

load_dotenv()

def main():
    api_key = os.getenv("MARITACA_API_KEY")
    mari_talk = MariTalkService(api_key)

    user_input = input("Digite sua pergunta: ")
    response = mari_talk.chat(user_input)
    print(f"Resposta: {response}")

if __name__ == "__main__":
    main()
