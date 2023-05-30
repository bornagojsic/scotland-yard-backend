import sys

def process_data(id):
    # Your data processing logic based on the ID
    processed_data = f"Processed data for ID {id}"
    return processed_data

if __name__ == "__main__":
    id = sys.argv[1]  # Retrieve the ID passed as an argument
    processed_data = process_data(id)
    print(processed_data)