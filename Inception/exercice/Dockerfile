FROM python

RUN apt-get update && apt-get install -y unzip
COPY doc.zip /
RUN unzip doc.zip -d /tmp
WORKDIR /tmp/bcfc524e0328343c6e70d0ac93f4ef3e-a7b8c232554c58dddb06dd7a06025a45f92b0e66/
EXPOSE 7777

ENTRYPOINT ["python", "-m", "http.server", "7777"]