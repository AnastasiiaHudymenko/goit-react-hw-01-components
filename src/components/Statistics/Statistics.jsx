import PropTypes from 'prop-types';

import {
  SectionStatistics,
  TitleStatistics,
  StatList,
  ItemList,
  LabelSpan,
  ParcentageSpan,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ stats, title }) {
  return (
    <SectionStatistics>
      {title && <TitleStatistics>{title}</TitleStatistics>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <ItemList key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <LabelSpan>{label}</LabelSpan>
            <ParcentageSpan class="percentage">{percentage}%</ParcentageSpan>
          </ItemList>
        ))}
      </StatList>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
