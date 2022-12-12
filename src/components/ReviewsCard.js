import React from "react";
import { Card } from "semantic-ui-react";

function ReviewsCard({ restaurants }) {

    const { review, name } = restaurants

    return (
        <Card>
            <Card.Header centered className="review-header">
                {name}
            </Card.Header>
            <Card.Content>
                {review}
            </Card.Content>
        </Card>
    )
}

export default ReviewsCard