docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kr/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kr/app ../..
