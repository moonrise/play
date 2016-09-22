Run sslclient.sh to test CIS ssl handshake on the machine where CIS server is installed - this is to test SSL WebService client connection within CIS server environment (not from the external environment of CIS server like web browsers invoking WebManager connection).

ssl.SSLClient java program takes three sequential and optional parameters of host, user, and password with default 'localhost', 'admin', and 'admin'.
This java program was compiled with Java 7. Please edit sslclient.sh file and make necessary adjustment of JAVA_HOME and Java key store configuration parameters by mirroring CIS server environment. "-Djavax.net.debug=all" is used to produce SSL diagnostic trace.
