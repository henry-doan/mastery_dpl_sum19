import React from 'react';
import { Grid, Card, } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const AdminLessonList = ({id, instructor, title, subtitle, description, length, body }) => (
  <Grid>
    <Grid.Row relaxed columns={4}>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header><Link to={{ pathname: `/admin/lesson/${id}`, state: { id, instructor, title, subtitle, description, length, body } }} >{ title }</Link></Card.Header>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )

  export default AdminLessonList;