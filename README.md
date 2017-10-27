# NativeScript Core, Static Star Rating Demo

### Screenshot
[](screenshot.png)

### Usage
Copy the ratings folder to some place in your project
And at the page where you want to use it,
you can use it like this

```xml
<Page loaded="pageLoaded" class="page" xmlns="http://www.nativescript.org/tns.xsd" 
xmlns:ratings="ratings"> <!-- here, ratings is in the root dir of project -->

	<ActionBar title="Static Ratings Widget" class="action-bar">
	</ActionBar>
	<ScrollView>
		<StackLayout>
			<Label textWrap="true" text="This is a Reusable Component:" class="p-20 h2 text-center" />
			<GridLayout rows="auto" columns="10 * 10">
				<ratings:ratingView row="0" col="1" horizontalAlignment="center"
					value="3.2"
					max="5"
					color="#0000ff" /> 
				 <!-- Max {default: 5} and Color {default: black} are optional -->
			</GridLayout>

			<Label class="p-20 h3 text-center" marginTop="50" textWrap="true" text="Made with ♥ by: MultiShiv19" />
			<Label class="p-5 h4 text-center" textWrap="true" text="for NativeScript Community" />
		</StackLayout>
	</ScrollView>
</Page>
```

### Customizations
You can use FontAWesome icons. Place to do this is in `ratings.js` file

### License
MIT
