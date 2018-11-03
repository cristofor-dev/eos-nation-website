import React, { Component } from 'react';
import { Grid, GridCell, GridInner } from 'rmwc';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import { Body2, Heading3, Heading4, Icon } from './StyledComponents';

export class CalendarItem extends Component {
  render() {
    const { slug, name, location, date, timeInterval, extraInfoLink, facebookLink, twitterLink, meetupLink } = this.props;
    let metaInfo = [];

    if (location) {
      metaInfo.push(<Body2><i className="fas fa-map-marker margin-right-small" />{location}</Body2>);
    }
    if (timeInterval) {
      metaInfo.push(<Body2>
        <i className="far fa-clock margin-right-small" />{timeInterval}
      </Body2>);
    }
    if (extraInfoLink) {
      metaInfo.push(<a href={extraInfoLink} target="_blank"><Body2 link>
        <i className="fas fa-info-circle margin-right-small" />More info
      </Body2></a>);
    }

    return (
      <div style={{
        display: 'flex',
        borderBottom: 'solid gray 1px',
      }}>
        <div style={{
          width: '10%',
          display: 'inline-block',
          color: '#fff',
          padding: '20px',
          borderRight: 'solid gray 1px'
        }}>
          <div style={{
            fontSize: '86px',
            fontFamily: 'SF Pro Display',
            textAlign: 'center',
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"
          }}>
            {date.getDate()}
          </div>
          <div style={{
            fontSize: '24px',
            fontFamily: 'SF Pro Display',
            textAlign: 'center',
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"
          }}>
            {`${new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)} ${date.getFullYear()}`}
          </div>
        </div>
        <div style={{ width: 'calc(90% - 141px)', display: 'inline-block', padding: '40px', color: '#fff', }}>
          <Grid className="padding-remove">
            <GridCell span="12">
              <GridInner>
                <GridCell span="2"><Heading3>{slug}</Heading3></GridCell>
                <GridCell span="10"><Heading4>{name}</Heading4></GridCell>
              </GridInner>
            </GridCell>
            <GridCell span="12">
              <GridInner>
                <GridCell span="2">
                  {metaInfo.length ? metaInfo[0] : <Body2>-</Body2>}
                </GridCell>
                <GridCell span="8">
                  <GridInner>
                    {metaInfo.length > 1 ? metaInfo.map((info, index) => (
                      index !== 0 ? <GridCell span="6">{metaInfo[index]}</GridCell> : null
                    )) : <Body2>-</Body2>}
                  </GridInner>
                </GridCell>
                <GridCell span="2" className="text-align-right">
                  <span className="margin-right-medium">
                    <a href={facebookLink} target="_blank"><Icon className="fab fa-facebook-f facebook-custom-icon" /></a>
                  </span>
                  <span className="margin-right-medium">
                    <a href={twitterLink} target="_blank"><Icon className="fab fa-twitter" /></a>
                  </span>
                  <a href={meetupLink} target="_blank"><Icon className="fab fa-meetup" /></a>
                </GridCell>
              </GridInner>
            </GridCell>
          </Grid>
        </div>
      </div>
    );
  }
}

class Calendar extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="align-center" style={{
        maxWidth: '1120px',
        background: 'linear-gradient(0deg, #D66C44 0%, rgba(50,72,86,0.84) 44.82%, #324856 100%)'
      }}>
        {events.map((event) => (
          <CalendarItem {...event} />
        ))}
      </div>
    );
  }
}

export default Calendar;
