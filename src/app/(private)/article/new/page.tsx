'use client';
import styles from './NewArticle.module.css';
import { ChangeEvent, useRef } from 'react';
import { useState } from 'react';

export default function NewArticle() {
  
  // Pré visualização da imagem
  const [preImagem, setImagemPre] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const preUrl = URL.createObjectURL(file);
      setImagemPre(preUrl);
      setImagemSelecionada(file);
    }
  }
  
  const handleTextInputClick = () => {
    fileInputRef.current?.click();
  };

  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagemSelecionada, setImagemSelecionada] = useState<File | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo || !conteudo || !imagemSelecionada) {
      alert("Preencha o campo título e conteúdo!");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    formData.append("imagem", imagemSelecionada);

    try {
      const response = await fetch("http://localhost:3001/api/artigos", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Artigo criado!");
        setTitulo("");
        setConteudo("");
        setImagemPre(null);
        setImagemSelecionada(null);
      } else {
        alert("Erro ao criar artigo");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro na requisição");
    }

  }

  return (
    <div>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.header}>
            <h1 className={styles.h1}>Novo Artigo</h1>
            <div className={styles.grupoDireita}>
              <button className={styles.cancelarBotao}>Cancelar</button>
              <button className={styles.salvarBotao} type='submit'>Salvar</button>
            </div>
          </div>
          <div className={styles.grupoForm}>
            <label htmlFor="" className={styles.label}>Título</label>
            <input type="text" value={titulo} placeholder="Adicione um título" onChange={(e) => setTitulo(e.target.value)} className={styles.input}/>
          </div>

          {/* IMAGEM */}

          <div className={styles.grupoImagem}>

            <div className={styles.inserirImagem}>
              <label htmlFor="" className={styles.label}>Inserir imagem</label>
              <input
                type="file"
                name="imageUpload"
                id="imageUpload"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                placeholder='Adicione uma imagem'
                ref={fileInputRef} // Attach the ref here
              />
              <input 
                type="text"
                placeholder="Adicione uma imagem"
                className={`${styles.input} ${styles.inputImagemDisplay}`}
                value={preImagem ? "Imagem selecionada" : ""} 
                readOnly
                onClick={handleTextInputClick}
              />
              <label htmlFor="imagemUpload" className={styles.selecionarImagem}>SELECIONAR</label>
            </div>

            <div className={styles.previewImagem}>
              { preImagem ? (
                <img src={preImagem} alt="Pré-visualização da imagem" className={styles.previewImagem}/>
              ) : (
                <img src="/images/imagemnull.png" alt="Imagem" className={styles.placeholderImagem}/>
              )}
            </div>
          </div>

          {/* INPUT TEXTO DO ARTIGO */}

          <div className={styles.grupoForm}>
            <label htmlFor="" className={styles.label}>Texto</label>
            <textarea value={conteudo} placeholder="Escreva seu artigo" onChange={(e) => setConteudo(e.target.value)} className={styles.textarea}></textarea>
          </div>
        </form>
      </main>
    </div>
  );
}