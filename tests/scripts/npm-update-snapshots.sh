### FIND DIR ###
DIR=$(dirname $(readlink -f $0 2> /dev/null) 2> /dev/null) 
worked=$?

if [ $worked -ne 0 ]
then
    # local
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
fi

ROOT=$DIR/../../

apps=(
    "react"
    "angular"
    "html"
)

ports=(
    3000
    4100
    8080
)

makepids=()

### START APPS ###
for app in "${apps[@]}"
do
    cd $ROOT/example-apps/app-${app}
    make run | sed -e "s/^/${app}: : /;" &
    makepids+=($!)
done

### WAIT FOR APPS ###
for port in "${ports[@]}"
do
    $DIR/wait-for.sh localhost ${port}
done

### TEST ###
cd $DIR/..
cypress run --env updateSnapshots=true --spec "./**/002-apps/**/*.spec.ts"

### STOP APPS ###
for makepid in "${makepids[@]}"
do
    kill -stop ${makepid}
done


