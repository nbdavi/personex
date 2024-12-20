from openai import OpenAI
import os

class MariTalkService:
    def __init__(self, api_key, base_url="https://chat.maritaca.ai/api"):
        self.client = OpenAI(api_key=api_key, base_url=base_url)

    def chat(self, prompt):
        try:
            response = self.client.chat.completions.create(
                model="sabia-3",
                messages=[
                    {"role": "system", "content": "Você é um assistente útil."},
                    {"role": "user", "content": prompt},
                ],
                max_tokens=800,
                temperature=0.7,
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"Erro ao chamar a API: {e}"
