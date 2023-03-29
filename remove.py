import json

# Open the input JSON file and load its contents
with open('output.json', 'r') as f:
    data = json.load(f)

# Loop through each character in the "characters" array
for character in data['ceremonies']:
    # Delete the "localizedNames" field
    del character['localizedNames']

# del data['acts']

# Write the updated JSON to a new file
with open('output.json', 'w') as f:
    json.dump(data, f, indent=2)
