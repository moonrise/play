#!/bin/sh

"$JAVA_HOME/bin/java" \
-Djavax.net.ssl.trustStore=/xxxxx/conf/server/security/cis_server_truststore_strong.jks \
-Djavax.net.ssl.trustStorePassword=changeit \
-Djavax.net.ssl.trustStoreType=JKS \
-Djavax.net.debug=all \
-cp '.:./lib/commons-codec-1.9.jar:./lib/commons-httpclient-3_0_1.jar:./lib/commons-logging.jar:./lib/webservices-rt.jar' ssl.SSLClient localhost admin admin
