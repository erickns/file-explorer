import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileTree from './FileTree';
import FileList from './FileList';

const FileExplorer = () => {
  const [directories, setDirectories] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedDir, setSelectedDir] = useState(null);

  useEffect(() => {
    // busca o diretorio root para inicializar a arvore 
    axios.get('localhost:8888/api/directories/root').then(response => {
      setDirectories(response.data);
    });
  }, []);

  const handleDirectoryClick = (dirId) => {
    // busca os subdiretorios sob demanda
    axios.get(`/api/directories/${dirId}`).then(response => {
      setDirectories(response.data.subdirectories);
    });

    // busca arquivos de um diretorio
    axios.get(`/api/files/${dirId}`).then(response => {
      setFiles(response.data);
      setSelectedDir(dirId);
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <FileTree directories={directories} onDirectoryClick={handleDirectoryClick} />
      <FileList files={files} />
    </div>
  );
};

export default FileExplorer