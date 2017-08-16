package sportsapp.ro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@ComponentScan(basePackages = "sportsapp.ro")
@PropertySource(value = "file:./config/libertas.properties")
public class SportsappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SportsappApplication.class, args);
	}
}
