import os
import replicate

REPLICATE_API_TOKEN = "enter your key here, i can't reveal mine"
os.environ["REPLICATE_API_TOKEN"] = REPLICATE_API_TOKEN

def llama2_7b(prompt):
    output = replicate.run(
        "meta/llama-2-7b-chat",
        input={"prompt": prompt}
    )
    return ''.join(output)

def llama2_70b(prompt):
    output = replicate.run(
        "meta/llama-2-70b-chat",
        input={"prompt": prompt}
    )
    return ''.join(output)

def llama3_8b(prompt):
    output = replicate.run(
        "meta/meta-llama-3-8b-instruct",
        input={"prompt": prompt}
    )
    return ''.join(output)

def llama3_70b(prompt):
    output = replicate.run(
        "meta/meta-llama-3-70b-instruct",
        input={"prompt": prompt}
    )
    return ''.join(output)
