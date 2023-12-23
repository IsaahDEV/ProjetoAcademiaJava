package com.ProjetoAcademiaJavaBack;

import com.ProjetoAcademiaJavaBack.model.Itens;
import com.ProjetoAcademiaJavaBack.repository.ItensRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	@Bean
	CommandLineRunner initDatabase(ItensRepository itensRepository){
		return args -> {
			itensRepository.deleteAll();

			Itens i = new Itens();
			i.setCodigo(100230);
			i.setNome("Fita");
			i.setPreco(10);
			i.setQuantidade(50);
			itensRepository.save(i);
		};
	}
}
