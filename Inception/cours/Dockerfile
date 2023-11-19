FROM ubuntu

RUN apt-get update
RUN apt-get install -y iputils-ping vim net-tools dstat
COPY config /etc/fichier.config
ENTRYPOINT ["/bin/bash"]