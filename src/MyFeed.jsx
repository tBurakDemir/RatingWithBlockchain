import React from 'react'
import { Feed } from 'semantic-ui-react'

export default class MyFeed extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label image='/images/avatar/small/laura.jpg' />
                    <Feed.Content>
                        <Feed.Date>3 days ago</Feed.Date>
                        <Feed.Summary>
                            <a>Laura Faucet</a> created a post
                </Feed.Summary>
                        <Feed.Extra text>
                            Have you seen what's going on in Israel? Can you believe it.
                </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );

    }
}