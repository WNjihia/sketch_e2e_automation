Feature: Sign In

Background:
Given I navigate to the HomePage
When I decide to 'sign in'

Scenario: Valid Login Credentials
And I provide a "valid" email
Then I provide a "valid" password
And I tap on the Sign In button
