#!/bin/bash

# Find all TSX files containing the green stroke color and update them
find src -type f -name "*.tsx" -exec sed -i '' 's/stroke="#27AE60"/stroke="#48196b"/g' {} \;

# Find all SVG files containing the green stroke color and update them
find public -type f -name "*.svg" -exec sed -i '' 's/stroke="#27AE60"/stroke="#48196b"/g' {} \;
find public -type f -name "*.svg" -exec sed -i '' 's/fill="#27AE60"/fill="#48196b"/g' {} \;

echo "Color update complete!" 