import React from 'react';
import TimelineEntry from './TimelineEntry';

const Timeline = () => (
  <div>
    <TimelineEntry
      time={1995}
      title="I was born in Katowice"
      detail="Lorem ipsum dolor sit amet, ..."
    />
    <TimelineEntry
      time={2005}
      title="Secondary school specializing in artistic"
      detail="Lorem ipsum dolor sit amet, ..."
    />
    <TimelineEntry
      time={2009}
      title="First level graduation in Graphic Design"
      detail="Lorem ipsum dolor sit amet, ..."
    />
    <TimelineEntry
      time={2012}
      title="Second level graduation in Graphic Design"
      detail="Lorem ipsum dolor sit amet, ..."
    />
  </div>
);

export default Timeline;
