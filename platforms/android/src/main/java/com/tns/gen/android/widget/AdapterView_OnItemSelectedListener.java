package com.tns.gen.android.widget;

public class AdapterView_OnItemSelectedListener implements android.widget.AdapterView.OnItemSelectedListener {
	public AdapterView_OnItemSelectedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onItemSelected(android.widget.AdapterView param_0, android.view.View param_1, int param_2, long param_3)  {
		java.lang.Object[] args = new java.lang.Object[4];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		args[3] = param_3;
		com.tns.Runtime.callJSMethod(this, "onItemSelected", void.class, args);
	}

	public void onNothingSelected(android.widget.AdapterView param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onNothingSelected", void.class, args);
	}

}
