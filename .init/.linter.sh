#!/bin/bash
cd /home/kavia/workspace/code-generation/river-plate-official-website-111092-111101/river_plate_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

