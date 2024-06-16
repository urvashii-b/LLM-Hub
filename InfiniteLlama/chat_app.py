from llama_helpers import llama2_7b, llama2_70b, llama3_8b, llama3_70b

def chat_with_llama(model):
    print("Chat with Llama-3. Type 'exit' to end the chat.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Ending chat. Goodbye!")
            break
        response = model(user_input)
        print(f"Llama-3: {response}")

def main():
    # You can choose the model you want to use
    model_choice = input("Choose the model (llama2_7b, llama2_70b, llama3_8b, llama3_70b): ")
    if model_choice == "llama2_7b":
        chat_with_llama(llama2_7b)
    elif model_choice == "llama2_70b":
        chat_with_llama(llama2_70b)
    elif model_choice == "llama3_8b":
        chat_with_llama(llama3_8b)
    elif model_choice == "llama3_70b":
        chat_with_llama(llama3_70b)
    else:
        print("Invalid choice. Please restart and choose a valid model.")

if __name__ == "__main__":
    main()
