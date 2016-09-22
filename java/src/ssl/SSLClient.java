package ssl;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.UsernamePasswordCredentials;
import org.apache.commons.httpclient.auth.AuthScope;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.StringRequestEntity;

import java.io.IOException;


public class SSLClient {
    final static String TrustStore = "javax.net.ssl.trustStore";

    public static void main(String[] args) throws Exception {
        String host = args.length > 0 ? args[0] : "localhost";
        String user = args.length > 1 ? args[1] : "admin";
        String pass = args.length > 2 ? args[2] : "admin";

        System.out.format("[Test Http Client] Starting with host '%s', user '%s', password '%s'...\n", host, user, pass);
        printJKSTrustStore();

        //doUrl("https://localhost:9402/manager");
        doCISSession(String.format("https://%s:9402/services/system/util/session/sessionPort.ws", host), user, pass);
    }

    private static void printJKSTrustStore() {
        System.out.printf("[Test Http Client] %s: %s\n", TrustStore, System.getProperty(TrustStore));
    }

    private static void doCISSession(String url, String user, String passwd) {

        HttpClient client = new HttpClient();
        client.getState().setCredentials(AuthScope.ANY, new UsernamePasswordCredentials(user, passwd));

        PostMethod post = new PostMethod(url);
        post.setDoAuthentication(true);

        // soap request post body
        String soapActionRequest = getBeginSessionSoapAction();
        post.setRequestHeader("SOAPAction", "beginSession");
        post.setRequestEntity(new StringRequestEntity(soapActionRequest));

        // talk
        try {
            System.out.format("[Test Http Client] Connecting to '%s' with post content '%s'\n", url, soapActionRequest);
            int status = client.executeMethod(post);

            System.out.format("[Test Http Client] ===== response status code: %d\n", status);
            System.out.format("[Test Http Client] ===== response content:\n%s\n", post.getResponseBodyAsString());
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        finally {
            post.releaseConnection();
        }
    }

    private static void doUrl(String url) {
        System.out.format("[Test Http Client] Connecting to '%s'...\n", url);

        HttpClient client = new HttpClient();
        GetMethod method = new GetMethod(url);

        try {
            // Execute the method.
            int statusCode = client.executeMethod(method);
            if (statusCode != HttpStatus.SC_OK) {
                System.err.println("[Test Http Client] Method failed: " + method.getStatusLine());
            }

            // Read the response body.
            byte[] responseBody = method.getResponseBody();

            // Deal with the response; Use caution: ensure correct character encoding and is not binary data
            System.out.println(new String(responseBody));
        } catch (HttpException e) {
            System.err.println("[Test Http Client] Fatal protocol violation: " + e.getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("[Test Http Client] Fatal transport error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Release the connection.
            method.releaseConnection();
        }
    }

    private static String getBeginSessionSoapAction() {
        return "<?xml version=\"1.1\" encoding=\"utf-8\"?>"
            + "<soap-env:Envelope xmlns:soap-env=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:archive=\"http://www.compositesw.com/services/system/admin/archive\" xmlns:common=\"http://www.compositesw.com/services/system/util/common\" xmlns:execute=\"http://www.compositesw.com/services/system/admin/execute\" xmlns:resource=\"http://www.compositesw.com/services/system/admin/resource\" xmlns:server=\"http://www.compositesw.com/services/system/admin/server\" xmlns:session=\"http://www.compositesw.com/services/system/util/session\" xmlns:user=\"http://www.compositesw.com/services/system/admin/user\">"
            + "<soap-env:Body>"
            + "<session:beginSession>"
            + "    <session:sessionTimeout>300</session:sessionTimeout>"
            + "    <session:sessionName>Manager</session:sessionName>"
            + "</session:beginSession>"
            + "</soap-env:Body>"
            + "</soap-env:Envelope>";
    }
}