import React from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';

const FileTree = ({ directories, onDirectoryClick }) => {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} onClick={() => onDirectoryClick(nodes.id)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      {directories.map((dir) => renderTree(dir))}
    </TreeView>
  );
};

export default FileTree;
