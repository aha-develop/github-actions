import React, { memo } from 'react';
import ExternalLink from './ExternalLink';

export type AttributeProjectProps = {
  project: IProject;
};

const AttributeProject = ({ project }: AttributeProjectProps) => {
  if (!project) {
    return null;
  }
  return (
    <aha-flex>
      <ExternalLink href={project.url}>
        <span className="type-icon">
          <aha-icon icon="fa-solid fa-bookmark type-icon" />
          <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{project?.name}</span>
        </span>
      </ExternalLink>
    </aha-flex>
  );
};

export default memo(AttributeProject);
