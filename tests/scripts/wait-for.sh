#!/bin/sh

# Wait For
#
# The script waits until a remote `PORT` on the `HOST` is open
# 
# It tries out two methods:
#  - a general bash way without any extra tool
#  - an sh version with nc
# 
#  If one of them succeeds the scripts exits
#


HOST=$1
PORT=$2

echo "status=waiting host=${HOST}:${PORT}"

is_port_open() {
    timeout 2 bash -c "</dev/tcp/${HOST}/${PORT}" 2> /dev/null
    result=$?

    if [ $result -ne 0 ]
    then
        nc -zvw3 $HOST $PORT 2> /dev/null
        result=$?
    fi
    
    if [ $result -eq 0 ]
    then
        echo "true"
    else 
        echo "false"
    fi
}



res="$(is_port_open)"
while [ "$res" != "true" ]
do
    sleep 1
    res="$(is_port_open)"
done

echo "status=online host=${HOST}:${PORT}"