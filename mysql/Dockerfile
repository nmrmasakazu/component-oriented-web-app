FROM mysql:latest
RUN mkdir -p /var/log/mysql/ && \
    touch /var/log/mysql/mysqld.log

COPY ./conf.d/mysqld_charset.cnf /etc/mysql/conf.d/mysqld_charset.cnf
