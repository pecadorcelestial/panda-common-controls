#!/usr/bin/env bash
# filename: clean-lib.sh

current="$(pwd)/lib"
echo $current

if [ -d "$current" ]
then
    echo "Directory exists!"
    rm -rf "$current"
    echo "Directory is gone now!"
else
    echo "Directory doesn't exist!"
fi