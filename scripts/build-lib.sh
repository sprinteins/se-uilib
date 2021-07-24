# local
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

# in docker
# DIR=$(dirname $(readlink -f $0))

cd $DIR/../design-system/uilib

yarn install && yarn build && yarn link